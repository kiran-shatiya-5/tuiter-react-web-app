import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
           <ul class="list-group">
           <li class="list-group-item bg-dark">-->
          <div class="row d-flex">
            <div class = "col-5">
              <div class = "d-flex">
                <div class="text-white"><b>Who to Follow</b></div>
              </div>
            </div>
          </div>
        </li>

        <li class="list-group-item bg-dark">
          <div class="row d-flex">
            <div class = "col-3">
              <img class="rounded-circle p-1" src="../../labs/a4/tuiter/images/java.png" style="width: 100%; height:100%">
            </div>
            <div class = "col-5">
              <div class = "d-flex">
                <div class="text-white"><b>Java</b></div>
                <i class="fa-solid fa-check p-1"></i>
              </div>
              <div class="text-white">@Java</div>
            </div>
            <div class = "col-4">
              <button type="submit" class="btn btn-primary text-white rounded-pill float-end">
                Follow
              </button>
            </div>
          </div>
        </li>

        <li class="list-group-item bg-dark">
          <div class="row d-flex">
            <div class = "col-3">
              <img class="rounded-circle p-1" src="../../labs/a4/tuiter/images/relativity_black.jpeg" style="width: 100%; height:100%">
            </div>
            <div class = "col-5">
              <div class = "d-flex">
                <div class="text-white"><b>Relativity Space</b></div>
                <i class="fa-solid fa-check p-1"></i>
              </div>
              <div class="text-white">@relativityspace</div>
            </div>
            <div class = "col-4">
              <button type="submit" class="btn btn-primary text-white rounded-pill float-end">
                Follow
              </button>
            </div>
          </div>
        </li>

        <li class="list-group-item bg-dark">
          <div class="row d-flex">
            <div class = "col-3">
              <img class="rounded-circle p-1" src="../../labs/a4/tuiter/images/virgin.svg" style="width: 100%; height:100%">
            </div>
            <div class = "col-5">
              <div class = "d-flex">
                <div class="text-white"><b>Virgin Galactica</b></div>
                <i class="fa-solid fa-check p-1"></i>
              </div>
              <div class="text-white">@virgingalactic</div>
            </div>
            <div class = "col-4">
              <button type="submit" class="btn btn-primary text-white rounded-pill float-end">
                Follow
              </button>
            </div>
          </div>
        </li>

        <li class="list-group-item bg-dark">
          <div class="row d-flex">
            <div class = "col-3">
              <img class="rounded-circle p-1" src="../../labs/a4/tuiter/images/nasa.jpg" style="width: 100%; height:100%">
            </div>
            <div class = "col-5">
              <div class = "d-flex">
                <div class="text-white"><b>NASA</b></div>
                <i class="fa-solid fa-check p-1"></i>
              </div>
              <div class="text-white">@NASA</div>
            </div>
            <div class = "col-4">
              <button type="submit" class="btn btn-primary text-white rounded-pill float-end">
                Follow
              </button>
            </div>
          </div>
        </li>

        <li class="list-group-item bg-dark">
          <div class="row d-flex">
            <div class = "col-3">
              <img class="rounded-circle p-1" src="../../labs/a4/tuiter/images/tesla.jpg" style="width: 100%; height:100%">
            </div>
            <div class = "col-5">
              <div class = "d-flex">
                <div class="text-white"><b>Tesla</b></div>
                <i class="fa-solid fa-check p-1"></i>
              </div>
              <div class="text-white">@Tesla</div>
            </div>
            <div class = "col-4">
              <button type="submit" class="btn btn-primary text-white rounded-pill float-end">
                Follow
              </button>
            </div>
          </div>
        </li>
           </ul>
`);
}

export default WhoToFollowList