import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { NoToneMapping, THREE } from 'three.js'
import { Laptop } from './Laptop'

// * as THREE from 'three.js'

export default function Escene() {
  return (

    <div className='container'>
      <audio src='../public/music/musica.mp3' autoPlay loop />
      <Canvas style={{ width: '100%', height: '100%' }} camera={{position: [0, 3, 25],
        fov: 65
      }}

      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        NoToneMapping: THREE.ACESFilmicToneMapping
      }}
      
      >
        <mesh>
          <Suspense>
            <Laptop></Laptop>
          </Suspense>

          <directionalLight 
            position={[10, 10, 10]}
            color={'#ffffff'}
            intensity={1.3}
          />
          <ambientLight intensity={0.5} color={'#ffffff'}/>

          <OrbitControls target={[0, 5, 1]}/>
        </mesh>
      </Canvas>
    </div>
  )

}