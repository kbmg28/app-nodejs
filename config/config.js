const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env){
        case 'dev': 
        return{
            bd_string: 'mongodb+srv://usuario_admin:12262628@clusterapi-gfmyz.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'kbmg28',
            jwt_expires_in: '1d'
        }

        case 'prod': 
        
        return{
            bd_string: 'mongodb+srv://usuario_admin:12262628@clusterapi-gfmyz.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'kbmg28',
            jwt_expires_in: '1d'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();