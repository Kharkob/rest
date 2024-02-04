const HOUSES_ENDPOINT = 'http://anicent-taiga-31359.herokuapp.com/api/houses';
//heroku was blocked by CORS so this bascially broke the project
class HousesApi {
    get = async () => {
        try {
        const resp = await fetch (HOUSES_ENDPOINT);
        const data = await resp.json();
        return data;
         } catch(e) {
        console.log('Oops, looks like fetchHouse had an issue', e );
         }
    }
   //watch the $ signs switch between ` and ' if one or the other don't work
   //I forgot what ` do 
    pub = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}` , {
                //idk what 'PUT' is or even used for CHAT
                method: 'PUT',
                //'Content-Type'; 'application/json' don't know that is CHAT
                headers: {
                    'Content-Type' : 'application/json'
                },

                
                body:  JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log('Oops, looks like updatingHouses had an issue.', e);
        }
    }
}

export const housesApi = new HousesApi();