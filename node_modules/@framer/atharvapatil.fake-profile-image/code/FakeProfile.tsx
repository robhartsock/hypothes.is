import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function FakeProfileImage(props) {
    const { size, bound, boundColor, boundDisplay, radius, ...rest } = props

    return (
        <Frame
            center
            backgroundColor={boundDisplay ? boundColor : "transparent"}
            {...rest}
            overflow={"hidden"}
        >
            <Frame
                center
                size={"100%"}
                width={size}
                height={size}
                image="https://thispersondoesnotexist.com/image"
                borderRadius={radius + "%"}
            />
        </Frame>
    )
}

FakeProfileImage.defaultProps = {
    size: 148,
    bound: 180,
    boundColor: "#f7e8f6",
    boundDisplay: true,
    radius: 50,
    width: 172,
    height: 172,
}

addPropertyControls(FakeProfileImage, {
    size: {
        min: 24,
        max: 380,
        title: "Image Size",
        type: ControlType.Number,
        defaultValue: 148,
        step: 4,
        displayStepper: true,
    },

    boundColor: {
        title: "Bound Color",
        type: ControlType.Color,
        defaultValue: "#f7e8f6",
    },

    boundDisplay: {
        title: "Display Bounds?",
        type: ControlType.Boolean,
        defaultValue: true,
    },

    radius: {
        title: "Radius",
        type: ControlType.Number,
        min: 0,
        max: 50,
        step: 2,
        defaultValue: 50,
        displayStepper: false,
    },
})
