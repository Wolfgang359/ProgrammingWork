const background = {
  backgroundImage: "url('https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3449&q=80')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "0 38%"
}

export const About = () => (
  <>
    <div className="jumbotron text-center text-primary p-5" style={background}>
      <h1 className="m-5 pt-5">Pupster</h1>
      <h2 className="m-5 pb-5">Their good boys and girls</h2>
    </div>
    <div className="container">
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero lacus, consectetur quis nunc et, vehicula blandit nisi. Donec placerat a turpis et faucibus. Nullam ut urna vel ligula placerat porta. Ut vel ligula nec tortor tincidunt facilisis quis ac nulla. In nec nibh diam. Donec et felis vitae mi mattis efficitur nec eu odio. Vestibulum gravida lectus augue, vitae porta nisi semper eget. Donec iaculis tellus at augue luctus, vel scelerisque felis bibendum. Nulla facilisi. Aliquam at scelerisque elit, vitae fringilla leo. Duis magna lectus, varius non dignissim et, vehicula ac orci.</p>
      <p>Donec auctor dapibus lorem. Nullam cursus turpis pulvinar mattis placerat. Vivamus at erat accumsan, vehicula lacus ut, pulvinar massa. Sed eu ultricies risus. Ut id neque lobortis, fringilla neque sit amet, rhoncus metus. Maecenas mi nibh, suscipit nec leo sed, cursus maximus sem. Nulla sed lacus congue justo sodales feugiat sed ut felis</p>
    </div>
  </>
)