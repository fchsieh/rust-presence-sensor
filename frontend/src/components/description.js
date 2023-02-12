import React from "react";
import { Typography, Link } from "@mui/material";

const Description = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60%",
                margin: "auto",
                textAlign: "center",
                marginTop: "2.5rem",
            }}
        >
            <Typography variant="h6">
                <Typography
                    display="inline"
                    fontWeight="fontWeightBold"
                    variant="h6"
                >
                    BlueSense (Presence Sensor)
                </Typography>
                {" - "}a simple yet powerful app that allows you to track the
                presence of nearby devices. Utilizing Bluetooth Low Energy
                technology (BLE), it detects the presence of other devices in
                real-time, making it perfect for use in a variety of settings
                such as offices, homes, and libraries. Give it a try and see how
                it enhances your device tracking experience!
                <Typography variant="h6">
                    Code available on{":  "}
                    <Link
                        href="https://github.com/fchsieh/BlueSense"
                        underline="hover"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub/BlueSense
                    </Link>
                </Typography>
            </Typography>
        </div>
    );
};

export default Description;
