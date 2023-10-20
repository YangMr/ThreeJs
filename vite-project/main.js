/**
 * 1. 下载threejs并引入threejs
 * 2. 创建场景
 * 3. 创建相机
 * 4. 创建渲染器, 并设置画布大小, 添加到DOM显示
 * 5. 传入场景与摄像机, 并渲染到画面
 * 
 * 参数1: 垂直角度(建议75), 视野范围
 * 参数2: 宽高比(建议与画布相同宽高), 物体绘制比例
 * 参数3: 近截面距离摄像机距离
 * 参数4: 远截面距离摄像机距离
 *
 */

// 1. 引入threejs
import * as THREE from 'three';

// 定义全局变量
let scene , camera, renderer

// 初始化加载场景与相机
function init(){
    // 2. 创建场景
    scene = new THREE.Scene();
    // 3. 创建相机
    // * 参数1: 垂直角度(建议75), 视野范围
    // * 参数2: 宽高比(建议与画布相同宽高), 物体绘制比例
    // * 参数3: 近截面距离摄像机距离
    // * 参数4: 远截面距离摄像机距离
    camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000)

    // 4. 创建渲染器, 并设置画布大小, 添加到DOM显示
    renderer = new THREE.WebGLRenderer()
    // 设置画布大小
    renderer.setSize(window.innerWidth,window.innerHeight)
    // 添加到DOM
    document.body.append(renderer.domElement)

    // 5. 传入场景与摄像机, 并渲染到画面
    renderer.render(scene, camera)

}

// 调用初始化加载场景与相机
init()







