FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine as build
WORKDIR /server
COPY . .
RUN dotnet restore
RUN dotnet publish -o /server/published-app

FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine as runtime
WORKDIR /server
COPY --from=build /server/published-app /server
ENTRYPOINT [ "dotnet", "/server/ChatService.dll" ]