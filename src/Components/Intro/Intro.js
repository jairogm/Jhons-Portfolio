import { Flex } from "../layouts/Flex";
import Hello from "./Hello"
import Photo from "./Photo"


export function Intro() {
    return (
        <Flex Mobiledirection="column-reverse" justify="space-between">
            <Hello />
            <Photo />
        </Flex>
    )
}
