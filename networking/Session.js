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

	removeClient(socketID)
	{
		for(var client = 0; client < this.clients.length; client++)
			if (this.clients[client].id === socketID)
				this.clients.splice(client, 1);
	}

	addClient(socket)
	{
		if (!this.clientExists(socket.id))
			this.clients.push(socket);
	}
};
