/*
 * @Author: jay
 * @Date: 2024-04-16 10:14:49
 * @LastEditTime: 2024-04-16 15:26:59
 * @Description: 按钮
 */
import React, { type FC } from 'react';
import "./style.less";

interface ButtonProps {
    type:"3d" | "defalut" | "shake";
    text?: string;
    children:any;
    color:string;
}
const Buttons: FC<ButtonProps> = ({text,children,type="defalut",color}) => {
    const str=text || children;
    const css:any={
        "--color":color
    }
    if(type==="3d"){
        return (<button style={{...css}} className="button3d">{str}</button>)
    }
    if(type==="shake"){
        return (<button style={{...css}} className="btn-shine">
            <span>{str}</span>
        </button>)
    }
    return (
        <button style={{...css}} className="button">
            {str}
        </button>
    )
};

export default Buttons;
