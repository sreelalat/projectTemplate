import Card from "../card/card"

type EmptyListProps={
    message: string,
    classname?: string,
}
const EmptyList = ({message,classname}:EmptyListProps) => {
  return (
    <Card className={`w-full h-full flex items-center justify-center bg-slate-100 text-slate-600  ${classname}`}>
        {message}
    </Card>
  )
}

export default EmptyList
