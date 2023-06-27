"use client"
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Fragment } from "react";
import dininglist from "@/lib/utils/dining";
import SecondTimeAvaiable from "@/components/dining/Iternary-builder/SecondStep/secondstep";

function SelectedRes({ params }: { params: { selectedRes: string | Date } }) {
    const path = usePathname();
    const searchParams = useSearchParams()

    const selctedAvaiableDate: { timerSelected: string | null; titleSelected: string | null; AllAvaible: Date | null; id: string | null; categories: string | null; guessNumber: string | null; } = {
        timerSelected: searchParams.get("time"),
        titleSelected: searchParams.get("title"),
        AllAvaible: new Date(searchParams.get("date") + " " + new Date().getFullYear()),
        id: searchParams.get("id"),
        categories: searchParams.get("categ"),
        guessNumber: searchParams.get("guessNum")
    }

    console.log(selctedAvaiableDate)
    return (<Fragment>
        <SecondTimeAvaiable selectedTime={selctedAvaiableDate} diningList={dininglist} />
    </Fragment>
    )
}
export default SelectedRes;