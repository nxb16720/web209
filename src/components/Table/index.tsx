import React from 'react'

type Props = {
    data: any[],
    cofig: any[]
}

const Table = ({ data, cofig }: Props) => {
    const header = cofig.map((column) => {
        return <th key={column.key}>{column.lable}</th>
    })

    const rederrow = data.map((item) => {
        const cell = cofig.map(colum => {
            return <td key={colum.key}>{colum.render(item)}</td>
        })
        console.log(cell);

        return <tr key={item.id}>
            {cell}
        </tr>
    })
    return (
        <table>
            <thead>
                <tr>{header}</tr>
            </thead>
            <tbody>
                {rederrow}
            </tbody>
        </table>

    )
}

export default Table