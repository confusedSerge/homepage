import { SwitchOff, SwitchOn } from "iconoir-react";

interface ISwitchProps {
    on: boolean;
    onClick: () => void;

    leftText: string;
    rightText: string;
}

const Switch: React.FC<ISwitchProps> = ({ on, onClick, leftText, rightText }) => {

    return (
        <div className="flex flex-row items-center justify-end cursor-pointer" onClick={
            () => {
                onClick();
            }
        }>
            <div className="font-bold cursor-pointer">
                {leftText}
            </div>

            {on ? <SwitchOn className="text-5xl px-4" /> : <SwitchOff className="text-5xl px-4" />}

            <div className="font-bold">
                {rightText}
            </div>
        </div>
    )
}

export default Switch;