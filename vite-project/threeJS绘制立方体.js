/**
 * 目标: three.js绘制立方体
 * 1. 创建图形, 宽高深为1单位
 * 2. 创建材质, 颜色为绿色 0x00ff00
 * 3. 创建网格物体对象, 传入图形和材质
 * 4. 把物体加入到场景中
 * 
 * 注意1: 摄像机需要拉远一些才能看到物体
 * 注意2: 渲染器需要调用 render 才能渲染画面 (等待物体添加到场景后再调用)
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

    // 把摄像机向后移动5个单位(移动摄像机向 z 轴5个单位, 默认摄像机和物体的坐标轴都在原点)
    camera.position.z = 5;

    // 4. 创建渲染器, 并设置画布大小, 添加到DOM显示
    renderer = new THREE.WebGLRenderer()
    // 设置画布大小
    renderer.setSize(window.innerWidth,window.innerHeight)
    // 添加到DOM
    document.body.append(renderer.domElement)

}

// 创建立方体
function createCube(){
    // 1. 创建图形(创建缓存(所谓的缓冲是指先把立方体的坐标保存到内存当中, 然后再等到绘制的时候从内存中在获取出来)立方体)
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // 2. 创建材质 (网格基础材质 - 线/面纯颜色描绘表面)
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // 3. 创建网格物体对象(网格物体对象)
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // 把摄像机向后移动5个单位(移动摄像机向 z 轴5个单位, 默认摄像机和物体的坐标轴都在原点)
    // camera.position.z = 5; // 这段代码也可以放到相机创建之后, 直接向z轴移动5个单位
}

// 调用初始化加载场景与相机方法
init()

// 调用创建立方体方法
createCube()

 // 5. 传入场景与摄像机, 并渲染到画面
 renderer.render(scene, camera)







