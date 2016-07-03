from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def dummy_fetch_search(request):
	dummy_response = {"response" : {
			"api_version" : "v1",
			"results" : [
				{
					"name" : "Ryan Smith",
					"location" : "Philadelphia, PA",
					"occupation" : "SuperDev"
				}
			]
		}
	}
	return Response(dummy_response)