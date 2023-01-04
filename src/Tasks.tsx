export type Props1Type = {
    data: ObjectType
}
export type ObjectType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}
export type TasksType = {
    taskId: number,
    title: string,
    isDone: boolean
}


export function Tasks(props: Props1Type) {
    return (
        <>
            <div>
                <h1>{props.data.title}</h1>
                <ul>
                    {props.data.tasks.map(el => {
                        return (
                            <li>
                                <span>{el.taskId}</span>
                                <span>{el.title}</span>
                                <span>{el.isDone}</span>
                            </li>
                        )
                    })}
                </ul>

                <ul>
                    {props.data.students.map(el => {
                        return (
                            <li>{el}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}