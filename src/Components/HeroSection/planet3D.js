import React, { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import styled from 'styled-components'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Earth.js'

export const Planet = () => {
    return (
        <mesh rotation={[90,0,20]}>
            <boxBufferGeometry attach="geometry" args={[2,2,2]}/>
            <meshNormalMaterial attach="material"/>
        </mesh>
    )
}

export const Wrapper = styled.div`
    position: 'relative',
    width: '500px',
    height: '400px',

    canvas {
        background-color: red
    }
`

/* <Canvas className="canvas" height="200px">
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,5,2]} intensity={1} />
            <Planet></Planet>
</Canvas> */

const Planet3D = () => {
  return (
    <Canvas>
        <OrbitControls 
            enableZoom={false} 
            autoRotate={true}
            enablePan={false}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense fallback={null}>
            <Model />
        </Suspense>
    </Canvas>
  )
}

export default Planet3D