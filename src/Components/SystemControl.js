import React from 'react'

export default function SystemControl() {
  return (
    <div className='p-2' style={{background: '#DCDCDC', borderColor: '#707070',height:'82vh'}}>
        <div className='container-fluid' style={{background: '#A19B9E', border: '1px solid #707070', borderRadius:'5px', height:'80vh'}}>
          <div className="row p-0 m-0">
            <h1 className='col-4 topHeading'>
              System Control
            </h1>
          </div>
          <div class="row my-3">
            <div class="col-4 text-center ">
              <div class="card bg-light border-dark" style={{maxWidth: '18rem'}}>
                <div class="card-header">Activity</div>
                <div class="card-body">
                  <h5 class="card-title">TalkingOnPhone</h5>
                </div>
                <div class="card-footer">
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="option1" autocomplete="off"/> Radio
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="option2" autocomplete="off"/> Radio
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 text-center">
              <div class="card bg-light border-dark" style={{maxWidth: '18rem'}}>
                <div class="card-header">Activity</div>
                <div class="card-body">
                  <h5 class="card-title">Holding-ShootingGun</h5>
                </div>
                <div class="card-footer">
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="option1" autocomplete="off"/> On
                    </label>
                    <label class="btn btn-secondary">
                      <input type="radio" name="options" id="option2" autocomplete="off"/> Off
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
