class CustumError extends Error {
  status:number
  constructor (status:number, message:string) {
    super(message)
    this.status = status
  }
}

export default CustumError
