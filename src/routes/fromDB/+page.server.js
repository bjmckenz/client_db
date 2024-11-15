
import sql from '$lib/server/database';

export async function load() {
    const rows = await sql`
    SELECT
        containerNumber,
        nameOfShip,
        containerSize,
        dateContainerShipped
    FROM
        containers`;

    console.log({rows});

    return { containers: rows };
}

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
        const containerNumber = data.get('containerNumber');
        const nameOfShip = data.get('nameOfShip');
        const containerSize = data.get('containerSize');
        const dateContainerShipped = data.get('dateContainerShipped');

        if (containerNumber == 'ERROR') {
            return {
                success: false,
                message: 'Invalid container number'
            };
        }

        await sql`
            INSERT INTO containers
                (containernumber, nameofship, containersize, datecontainershipped)
            VALUES
                (${containerNumber}, ${nameOfShip}, ${containerSize}, ${dateContainerShipped})
        `;
        return {
            success: true,
            message: 'Container added'
        };
    },
};
