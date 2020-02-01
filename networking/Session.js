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
				return (true);
		});

		return (false);
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
