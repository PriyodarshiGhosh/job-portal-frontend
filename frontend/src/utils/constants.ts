export const TEMP = "temp";
export const generateError = (err:any)=>{
    const error:any = {}
            if (Object.keys(err?.response?.data?.errors).length > 0) {
          Object.entries(err?.response?.data?.errors).map(([key, val]: any) => {
            error[key] = val[0]
          })
        }
        return error
  }
 export  const handleRemoveKey=(key:string,obj:any)=>{
    delete obj[key];
    return obj
    }