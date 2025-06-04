---
marp: true
theme: don
headingDivider: 2
---

# Linters, validators, checkers

<!-- _class: title -->

Joost Farla - <j.farla@geonovum.nl>

Dimitri van Hees - <d.vanhees@geonovum.nl>

## OGC API: Ruleset discovery

- OGC API standaard bestaat uit (sub-)modules
- Modules zijn geversioneerd
- 1 Spectral ruleset per module(-versie)
- Hoe weet je welke modules zijn geïmplementeerd?

## OGC API: Landing page

```json
{
  "title": "3D Basisvoorziening",
  "links": [
    {
      "rel": "service-desc",
      "type": "application/vnd.oai.openapi+json;version=3.0",
      "title": "The JSON OpenAPI 3.0 document that describes the API offered at this endpoint",
      "href": "https://api.pdok.nl/kadaster/3d-basisvoorziening/ogc/v1/api"
    },
    {
      "rel": "conformance",
      "type": "application/json",
      "title": "OGC API conformance classes implemented by the API offered at this endpoint",
      "href": "https://api.pdok.nl/kadaster/3d-basisvoorziening/ogc/v1/conformance"
    }
  ]
}
```

Bron (PDOK): https://api.pdok.nl/kadaster/3d-basisvoorziening/ogc/v1/

## OGC API: Conformance

```json
{
  "conformsTo": [
    "http://www.opengis.net/spec/ogcapi-common-1/1.0/conf/core",
    "http://www.opengis.net/spec/ogcapi-common-1/1.0/conf/json",
    "http://www.opengis.net/spec/ogcapi-common-1/1.0/conf/html",
    "http://www.opengis.net/spec/ogcapi-common-1/1.0/conf/oas30",
    "http://www.opengis.net/spec/ogcapi-common-2/1.0/conf/collections",
    "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/core",
    "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/html",
    "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson",
    "http://www.opengis.net/spec/ogcapi-features-2/1.0/conf/crs",
    "http://www.opengis.net/spec/ogcapi-features-5/1.0/conf/schemas",
    "http://www.opengis.net/spec/ogcapi-features-5/1.0/conf/core-roles-features",
    "http://www.opengis.net/spec/ogcapi-features-5/1.0/conf/returnables-and-receivables",
    "http://www.opengis.net/spec/json-fg-1/0.2",
    "http://www.opengis.net/spec/ogcapi-geovolumes-1/1.0/conf/core"
  ]
}
```

Bron (PDOK): https://api.pdok.nl/kadaster/3d-basisvoorziening/ogc/v1/conformance

## OGC API: Uitdagingen

- Profile-based content negotiation (https://www.w3.org/TR/dx-prof-conneg/)
  - In de OAS-spec is niet bekend welk schema correspondeert met welk profile
  - Het profile wordt uitgewisseld via links in de response body + `Link` header

```json
{
  "content": {
    "application/geo+json": {
      "schema": {
        "oneOf": [
          { "$ref": "#/components/schemas/featureGeoJSON" },
          { "$ref": "#/components/schemas/recordGeoJSON" }
        ]
      }
    }
  }
}
```

## Added features van de basislinter

- schema compatibility check

## custom functions

- spec of responses checken
