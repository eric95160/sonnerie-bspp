const  Discord  =  require ( ' discord.js ' );
const  music  =  require ( ' discord.js-music-v11 ' );
const  Bot  =  nouveau  Discord.Client ();
const  token  =  " <auth_token> "  // Recommandé pour charger à partir du fichier json.

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
/ *
 * Client @param {Client} - Le client discord.js. 
* @param {object} options - (Facultatif) Options pour configurer le bot de musique. Les options acceptables sont: 
* prefix: Le préfixe à utiliser pour les commandes (par défaut '!'). 
* global: Indique s'il faut utiliser une file d'attente globale au lieu d'une file d'attente spécifique au serveur (par défaut, false). 
* maxQueueSize: La taille maximale de la file d'attente (20 par défaut). 
* anyoneCanSkip: Autoriser quelqu'un à sauter la chanson. 
* clearInvoker: efface le message de commande. 
* volume: le volume par défaut du lecteur. 
* channel: Nom du canal vocal à rejoindre. S'il est omis, il rejoindra à la place le canal vocal de l'utilisateur. 
* / musique (client, options); 
