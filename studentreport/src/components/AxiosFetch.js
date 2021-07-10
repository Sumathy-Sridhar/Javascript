import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

function AxiosFetch() {
    const [axdata, setaxdata] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res)
                setaxdata(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    },[])

  

    return (
            <div>
                <div class="table-wrapper">
                    <table class="fl-table">
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>Id </th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {axdata.map((x) => {
                                return (
                                    <>
                                        <tr>
                                            <td> {x.userId}</td>
                                            <td> {x.id}</td>
                                            <td> {x.body}</td>
                                            <td> {x.title}</td>
                                        </tr>
                                    </>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
            )
}

export default AxiosFetch
