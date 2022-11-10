import {Card} from '../CardProduct/Card'

export function Cards(props) {
    return (
        <div>
            {
                props.cores.map((color, i) => {
                    return (
                        <Card key={i} corData={color} />
                    )
                })
            }
        </div>
    )
}
