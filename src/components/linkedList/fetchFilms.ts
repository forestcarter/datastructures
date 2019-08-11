export async function fetchFilms() {
	const query = ` query { allFilms { title releaseDate } } `;
        const rawResponse = await fetch(
            "https://api.graphcms.com/simple/v1/swapi",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query })
            }
		);
		return await rawResponse.json();
  }