import { Input } from "./input"
import { TextboxProps } from "../accessableCmp.types"

interface InputCmpProps {
    node: TextboxProps
    handleResult: (key: string, value: string) => void
}

export function InputCmp({ node, handleResult }: InputCmpProps) {
    return <Input
        node={node}
        handleResult={handleResult}
    />
}
