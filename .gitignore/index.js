const  Discord  =  require ( ' discord.js ' );
const  music  =  require ( ' discord.js-music-v11 ' );
Bot . sur ( ' prêt ' , () => {
     console . log ( ` [Start] $ { nouvelle  date () } ` );
});

musique (Bot, {
	préfixe :  ' - ' ,         // Préfixe de '-'. 
	global :  false ,       // Files d'attente spécifiques au serveur. 
	maxQueueSize :  10 ,    // Taille maximale de la file d'attente de 10. 
	clearInvoker :  true , // Si les autorisations sont applicables, autoriser le bot à supprimer les messages qui l'invoquent (début avec préfixe) 
    channel :  ' music '     // Nom du canal vocal à rejoindre . S'il est omis, il rejoindra à la place le canal vocal de l'utilisateur.
});
bot.login('NDM0MTgzODkwNjgxNDYyNzg0.DbGtKg.1WmC3vj94U-LK9lZ6WkG8ZTSXWY')
