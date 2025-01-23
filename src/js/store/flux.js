const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: []
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/goblanch/contacts");
					if (!response.ok) {
						getActions().createAgenda();
						return;
					}

					const fetchData = await response.json();

					if (fetchData) setStore({ contactList: fetchData.contacts });

					return fetchData;

				} catch (error) {
					console.log(error);
				}
			},

			createAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/goblanch", {
						method: "POST",
					})

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();
					console.log(fetchData);

				} catch (errpr) {
					console.log(error);
				}
			},

			addContact: (contact) => {
				const store = getStore();
				setStore({ ...store, contactList: [...store.contactList, contact] });
			},

			createContact: async (contact) => {
				try {
					fetch("https://playground.4geeks.com/contact/agendas/goblanch/contacts", {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(payload),
					})

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();
					console.log(fetchData);
					const actions = getActions();
					actions.addContact(fetchData);
				} catch (error) {
					console.log(error);
				}
			},

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/goblanch/contacts/${id}`, {
						method: "DELETE",
					})

					if (!response.ok) throw new Error(response.statusText);

					const store = getStore();
					const newContactList = store.contactList.filter(contact => contact.id !== id);
					setStore({ contactList: newContactList });

				} catch (error) {
					console.log(error);
				}
			},

			editContact: async (id, contacy) => {
				try {

					const response = fetch(`https://playground.4geeks.com/contact/agendas/goblanch/contacts/${id}`, {
						method: "PUT",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})

					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();

					if (fetchData) {
						const newContactList = store.contactList.map(contact => {
							if (contact.id == id) {
								contact = fetchData;
							}
						})

						setStore({ contactList: newContactList });
					}

					return fetchData;

				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
