import './App.css'
import check from './assets/check.svg'
import close from './assets/close.svg'

function App() {
  return (
    <div className='container'>

      <div className="row my-3 ">

        <div className='col-md-4 col-sm-12'>

          <div className="card me-3 cardRadius">
            <div class="card-header">
              <div className='text-center fontSize'>FREE</div>
              <div className='text-center fw-bolder fs-1'>$0/month</div>
            </div>
            <div className="card-body">
              <p className="card-text"><img src={check} />Single User</p>
              <p className="card-text"><img src={check} />50GB Storage</p>
              <p className="card-text"><img src={check} />Unlimited Public Projects</p>
              <p className="card-text"><img src={check} />Community Access</p>
              <p className="card-text opacity-50"><img src={close} />Unlimited Private Projects</p>
              <p className="card-text opacity-50"><img src={close} />Dedicated Phone Support</p>
              <p className="card-text opacity-50"><img src={close} />Free Subdomain</p>
              <p className="card-text opacity-50"><img src={close} />Monthly Status Reports</p>
              <div className='text-center'>
                <button type="button" className="btn btn-primary rounded-pill opacity-50">BUTTON</button>
              </div>
            </div>

          </div>

        </div>

        <div className='col-md-4 col-sm-12'>

          <div className="card me-3">
            <div class="card-header">
              <div className='text-center fontSize'>PLUS</div>
              <div className='text-center fw-bolder fs-1'>$9/month</div>
            </div>
            <div className="card-body">

              <p className="card-text"><img src={check} />5 Users</p>
              <p className="card-text"><img src={check} />50GB Storage</p>
              <p className="card-text"><img src={check} />Unlimited Public Projects</p>
              <p className="card-text"><img src={check} />Community Access</p>
              <p className="card-text"><img src={check} />Unlimited Private Projects</p>
              <p className="card-text"><img src={check} />Dedicated Phone Support</p>
              <p className="card-text"><img src={check} />Free Subdomain</p>
              <p className="card-text opacity-50"><img src={close} />Monthly Status Reports</p>
              <div className='text-center'>
                <button type="button" className="btn btn-primary rounded-pill opacity-50">BUTTON</button>
              </div>
            </div>
          </div>

        </div>


        <div className='col-md-4 col-sm-12'>

          <div className="card">
            <div class="card-header">
              <div className='text-center fontSize'>PRO</div>
              <div className='text-center fw-bolder fs-1'>$49/month</div>
            </div>
            <div className="card-body">

              <p className="card-text"><img src={check} /> Unlimited Users</p>
              <p className="card-text"><img src={check} />50GB Storage</p>
              <p className="card-text"><img src={check} />Unlimited Public Projects</p>
              <p className="card-text"><img src={check} />Community Access</p>
              <p className="card-text"><img src={check} />Unlimited Private Projects</p>
              <p className="card-text"><img src={check} />Dedicated Phone Support</p>
              <p className="card-text"><img src={check} />Free Subdomain</p>
              <p className="card-text"><img src={check} />Monthly Status Reports</p>
              <div className='text-center'>
                <button type="button" className="btn btn-primary rounded-pill">BUTTON</button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default App
