/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Konstantin_Keller (https://sketchfab.com/Konstantin_Keller)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-earth-c99483d5e2a94ca8b4f3579145584beb
title: Low Poly Earth
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/earth.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={2}>
          <mesh geometry={nodes.Icosphere001_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Icosphere001_1.geometry} material={materials.green} />
          <mesh geometry={nodes.Icosphere001_2.geometry} material={materials.white} />
          </group>
      </group>
    </group>
  )
}

useGLTF.preload('/earth.gltf')