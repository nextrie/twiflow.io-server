module.exports.Session = class Session
{
	constructor()
	{
		this.clients = [];
	}

	clientExists(socketID)
	{
		this.clients.forEach(client => {
			if (client.id === socketID)
				return (1);
		});

		return (0);
	}

	addClient(socket)
	{
		if (!this.clientExists(socket.id))
			this.clients.push(socket);
	}
};
