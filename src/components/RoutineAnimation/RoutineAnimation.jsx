import React from "react";
import "./RoutineAnimation.scss"
import {habitList} from "./data"

const HabitBubble = ({name, notToDo, color, offsetY, animationDelay}) => {
    const clientHeight = 500;
    const offsetTop = (clientHeight || 0) / 2;
    const randomOption = Math.floor(Math.random() * 6);
    return (
        <div
            className="habitBubble"
            data-option={randomOption}
            style={{
                animationDelay,
                top: offsetTop + offsetY,
            }}
        >
            <div className={notToDo ? "color-indicator-cross" : "color-indicator"} style={{backgroundColor: color}}/>
            <span>{name}</span>
        </div>
    );
};

const RoutineAnimation = () => (
    <div className="indexAnimation__container">
        {habitList.map((habit) => (<HabitBubble key={habit.name} {...habit} />))}
    </div>
)


export default RoutineAnimation
