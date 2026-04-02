"use client"

import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"

const texture = {
  matcap:
    "https://images.unsplash.com/photo-1626908013943-df94de54984c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2673&q=80",
  env: "https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
}

const sceneSpeed = 0.2
const objectSpeed = 0.35

class LightBar {
  constructor(scene: THREE.Scene, i: number) {
    const c_mat = new THREE.MeshBasicMaterial()
    const c_geo = new THREE.CapsuleGeometry(0.02, 0.5 + Math.random(), 5, 16)
    const c_mes = new THREE.Mesh(c_geo, c_mat)
    const amp = 1
    c_mes.position.y = -Math.random() * (amp / 2) + Math.random() * (amp / 2)
    c_mes.position.x = -Math.sin(i * 0.3) * Math.PI
    c_mes.position.z = -Math.cos(i * 0.3) * Math.PI
    scene.add(c_mes)
  }
}

export function SpinningSphereBackground() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    const clock = new THREE.Clock()
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
    camera.position.set(0, -1.7, 5)

    const controls = new OrbitControls(camera, canvas)
    controls.target.set(0, 0, 0)
    controls.rotateSpeed = 0.9
    controls.enableZoom = false
    controls.enableDamping = true
    controls.dampingFactor = 0.02

    const h_light = new THREE.HemisphereLight(0xffffff, 0x444444, 1)
    const p_light = new THREE.PointLight(0xffffff, 0.35)
    p_light.castShadow = true
    p_light.position.set(1, 5, 1)
    scene.add(h_light, p_light)

    for (let i = 0; i <= 20; i++) {
      new LightBar(scene, i)
    }

    const o_geo = new RoundedBoxGeometry(1, 1, 1, 5, 0.05)
    const o_mat = new THREE.MeshMatcapMaterial({
      color: 0xffffff,
      matcap: new THREE.TextureLoader().load(texture.matcap),
      map: new THREE.TextureLoader().load(texture.env),
    })
    const o_mes = new THREE.Mesh(o_geo, o_mat)
    scene.add(o_mes)

    let raf = 0

    const resize = () => {
      const w = wrap.clientWidth
      const h = wrap.clientHeight
      if (w < 1 || h < 1) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    resize()

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      scene.rotation.y = elapsedTime * sceneSpeed
      o_mes.rotation.y = -elapsedTime * objectSpeed
      o_mes.rotation.z = elapsedTime * objectSpeed
      o_mes.rotation.x = elapsedTime * objectSpeed
      o_mes.position.y = Math.sin(elapsedTime * objectSpeed) * 0.2

      camera.lookAt(scene.position)
      camera.updateMatrixWorld()
      renderer.render(scene, camera)
      controls.update()
    }
    animate()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      renderer.dispose()
      o_geo.dispose()
      o_mat.dispose()
      controls.dispose()
      scene.clear()
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative h-full w-full min-h-[280px]">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
