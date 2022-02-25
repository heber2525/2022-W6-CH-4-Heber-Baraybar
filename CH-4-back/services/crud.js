// import { RobotsConnect} from './db.js';

export async function getAllRobots(Robots) {
    /* const { booksCollection, mongoClient } = await booksConnect();
    const cursor = booksCollection.find();
    const result = await cursor.toArray();
    mongoClient.close(); */
    return await Robots.find({});
}

export async function getRobots(id, Robots) {
    /*  const dbId = ObjectId(id);
    const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.findOne({ _id: dbId });
    mongoClient.close(); */
    return await Robots.findById(id);
}

export async function insertRobots(robots, Robots) {
    /* const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.insertOne(book);
    mongoClient.close(); */
    const newRobots = new Robots(robots);

    return await newRobots.save();
}

export async function updateRobots(id, partialRobots, Robots) {
    /* const dbId = ObjectId(id);
    const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.findOneAndUpdate(
        { _id: dbId },
        {
            $set: { ...partialBook },
        }
    );
    mongoClient.close(); */
    return await Robots.findByIdAndUpdate(id, partialRobots, { new: true });
}

export async function deleteRobots(id, Robots) {
    /* const dbId = ObjectId(id);
    const { booksCollection, mongoClient } = await booksConnect();
    const result = await booksCollection.findOneAndDelete({ _id: dbId });
    mongoClient.close(); */
    return await Robots.findByIdAndDelete(id);
}
