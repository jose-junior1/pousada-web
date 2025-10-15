import { rooms } from "../../data/rooms.mock"
import Room from "../Room"

const RoomsList = () => {
    return (
        <div>
            <ul>
                {rooms.map((room) => (
                    <Room
                        id={room.id}
                        title={room.title}
                        description={room.description}
                        tags={room.tags}
                        image={room.image}
                    />
                ))}
            </ul>
        </div>
    )
}

export default RoomsList