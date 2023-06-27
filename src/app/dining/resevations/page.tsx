"use client"
import ReserveToBookTable from "../../components/dining/Iternary-builder/resevations-tables"
import { GetStaticProps } from 'next'
import dininglist from '../../lib/utils/dining';
import { useEffect } from "react";


function ReserveToBookTablePage() {

    return <div>
        <ReserveToBookTable diningList={dininglist} />
    </div>
}


export default ReserveToBookTablePage;