import Head from 'next/head';

const LayoutAuth = props => (
    <div>
        <Head>
            <title>Consorcio::Login</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        <style jsx global>
            {`                
                body {
                    background: #007bff;
                    background: linear-gradient(to right, #0062E6, #33AEFF);
                }
            `}
        </style> 
        <main className="container mt-4">
            {props.children}
        </main> 
    </div>
);

export default LayoutAuth;