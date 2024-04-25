export default async function getCamps(value:string|null,object:Query|null) {
    var query = '?';
    if (object!=null) {
      if (object.address != '') {
         query += '&address='
         query += object.address;


      }
      if (object.activity != '') {
          query += '&activity='
          query += object.activity;

       }
    }
    console.log('kdnvn')
    console.log(query)
  // await new Promise((resolve)=>setTimeout(resolve,1000))
  if (value==null || value=='') {


      const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds${query}`, {next: {tags:['camps']}})
      if (!response.ok) {
          throw new Error("Failed to fetch campground")

      }

      return await response.json()
  } else {


      const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds?name=${value}`, {next: {tags:['camps']}})
      if (!response.ok) {
          throw new Error("Failed to fetch campground")

      }

      return await response.json()
  }


}
