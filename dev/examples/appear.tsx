import * as React from "react"
import { useState } from "react"
import { motion, Appear, useCycle } from "@framer"

const style = {
    width: 100,
    height: 100,
    background: "red",
}

const colors = ["red", "green", "blue", "yellow", "pink"]

export const App = () => {
    const [length, setLength] = useState(2)

    const list = new Array(length).fill(true)

    return (
        <div>
            <div>
                <Appear enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
                    {list.map((t, i) => (
                        <motion.div
                            key={i}
                            style={{ ...style, backgroundColor: colors[i] }}
                        />
                    ))}
                </Appear>
            </div>
            <div style={{ position: "absolute", top: 10, left: 10 }}>
                <button onClick={() => setLength(length + 1)}>Add</button>
                <button onClick={() => setLength(length - 1)}>Remove</button>
            </div>
        </div>
    )
}