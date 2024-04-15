 interface ReservationItem {
    _id:string
    bookDate:string
    user:string
    campground:CampgroundItem
    night:number
}


   interface CampgroundJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CampgroundItem[]
  }

  interface CampgroundItem {
    _id: string,
    name:string,
    address:string,
    picture:string,
    tel:string,
    __v:number

    
  }

  interface ReviewItem {
    _id: string,
    user: string,
    content: string
  }

  