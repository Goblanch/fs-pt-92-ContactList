const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				console.log("HOLA");
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getContacts: async (slug) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`);
					if (!response.ok) {
						const errorData = await response.json();
						const agenda = await getActions().createAgenda(slug);
						return agenda;
					}

					const fetchData = await response.json();
					console.log(fetchData);
					return fetchData;

				} catch (error) {
					console.log(`[getContacts]: ${error} Creating new agenda with slug ${slug}`);
				}
			},

			createAgenda: async (slug) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}`, {
						method: "POST"
					})

					if (!response.ok) throw new Error("Couldn't create new agenda");

					const fetchData = await response.json();
					console.log(fetchData);
					return fetchData;

				} catch (error) {
					console.log(error);
				}
			},

			addContact: async (slug, contact) => {
				//getStore.contacts.push(contact);

				try {

					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
						method: "POST",
						body: JSON.stringify(contact),
						headers: {
							"Content-Type": "application/json"
						}
					})

					if (!response.ok) throw new Error(response.statusText);

					getActions().getContacts();

				} catch (error) {
					console.log(error);
				}
			},

			deleteContact: async (slug, id) => {
				try {

					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					})

					if (!response.ok) throw new Error(response.statusText);

				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
