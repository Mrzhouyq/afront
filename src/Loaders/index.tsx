/*
 * @Author: jay
 * @Date: 2024-04-15 16:40:22
 * @LastEditTime: 2024-04-16 15:36:46
 * @Description: loading库
 */
import React, { type FC } from 'react';
import "./style.less";

interface LoaderProps {
    type:"text" | "code" | "star" | 'pen';
    text?:string;
    color?:string;
}
const Loaders: FC<LoaderProps> = ({text='Loading...',type="text",color}) => {
    const css:any={
        "--color":color
    }
    if(type==="code"){
        return (
            <div className="terminal-loader" >
                <div className="terminal-header">
                    <div className="terminal-title">Status</div>
                    <div className="terminal-controls">
                    <div className="control close"></div>
                    <div className="control minimize"></div>
                    <div className="control maximize"></div>
                    </div>
                </div>
                <div className="text">{text}</div>
            </div>
        )
    }
    if(type==="star"){
        return (
            <div className="orbit">
                <ul className="orbit-wrap">
                    
                    <li className="orbit-center">
                    <i className="orbit-center__icon fa fa-code"></i>
                    </li>

                    <li>
                    <ul className="ring-0">
                        <li><i className="orbit-icon fa fa-git"></i></li>
                        <li><i className="orbit-icon fa fa-free-code-camp"></i></li>
                        <li><i className="orbit-icon fa fa-meetup"></i></li>
                        <li><i className="orbit-icon fa fa-codepen"></i></li>
                    </ul>
                    </li>

                    <li>
                    <ul className="ring-1">
                        <li><i className="orbit-icon fa fa-podcast"></i></li>
                        <li><i className="orbit-icon fa fa-css3"></i></li>
                        <li><i className="orbit-icon fa fa-html5"></i></li>
                    </ul>
                    </li>
                    <li>
                    <ul className="ring-2">
                        <li><i className="orbit-icon fa fa-windows"></i></li>
                        <li><i className="orbit-icon fa fa-safari"></i></li>
                        <li><i className="orbit-icon fa fa-edge"></i></li>
                        <li><i className="orbit-icon fa fa-linux"></i></li>
                        <li><i className="orbit-icon fa fa-apple"></i></li>
                        <li><i className="orbit-icon fa fa-chrome"></i></li>
                        <li><i className="orbit-icon fa fa-android"></i></li>
                        <li><i className="orbit-icon fa fa-firefox"></i></li>
                    </ul>
                    </li>
                    <li>
                    <ul className="ring-3">
                        <li><i className="orbit-icon fa fa-coffee"></i></li>
                        <li><i className="orbit-icon fa fa-terminal"></i></li>
                        <li><i className="orbit-icon fa fa-heart-o"></i></li>
                    </ul>
                    </li>

                </ul>
            </div>
        )
    }
    if(type==="pen"){
        return (<div className="loader"></div>)
    }
    return (<div className="loaderDiv">
    <div className="scanner" style={{...css}}>
      <span data-title={text}>{text}</span>
    </div>
  </div>)
};

export default Loaders;
