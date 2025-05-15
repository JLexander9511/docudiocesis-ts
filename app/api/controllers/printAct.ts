import { printData } from "@/app/(dashboard)/dashboard/components/PrintMechanism"

export const printAct = async (data: printData) => {

    const res = await fetch('/api/printAct',{
        body: JSON.stringify({
          data,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
  
      return await res.blob()
}