import { createServer } from 'miragejs'

function mockServer() {
    
  let server = createServer(
      {
          routes(){
              this.urlPrefix = "https://www.testdomain.com";
              this.namespace = "/v1/api";
              this.timing = 5000;

              this.get("/books", () => {
                return [
                    {title: "Breath: The New Science of a Lost Art", author:"James Nestor", year:2020},
                    {title: "Ego Is the Enemy", author:"Ryan Holiday", year:2019},
                    {title: "The Choice", author:"Edith Eva Eger", year:2021}
                ]
              })
          }
      }
  )

  return server
}

export default mockServer