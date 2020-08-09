module.exports = async function(db, {proffyValue, classValue, classScheduleValue}){

    const insertedProffy = await db.run(`
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES(
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio}
        );

    `)

    await db.run()

    await db.run()

}