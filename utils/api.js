export const fetchData = async (variable, lang) => {
	try {
const myHeaders = new Headers();
myHeaders.append("Accept-Language", lang);
myHeaders.append("Cookie", "laravel_session=0W5prpVpFBcgqNnPbpVgBFmLPREOB3wn3EmKdh16");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
  next:{
    revalidate:10
}
};

const response = await fetch(`http://api.truemachinecnc.com/${variable}`, requestOptions)
const responsedata = await  response.json();
return  responsedata;
} catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
}
};


export const fetchPostData = async (variable, lang) => {
	try {
const myHeaders = new Headers();
myHeaders.append("Accept-Language", lang);
myHeaders.append("Cookie", "laravel_session=0W5prpVpFBcgqNnPbpVgBFmLPREOB3wn3EmKdh16");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow",
  next:{
    revalidate:10
}
};

const response = await fetch(`http://api.truemachinecnc.com/${variable}`, requestOptions)
const responsedata = await  response.json();
return  responsedata;
} catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
}
};