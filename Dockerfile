FROM node:14

WORKDIR /app

COPY /opt/jenkins_agent/workspace/test_node_pipeline/package*.json ./

RUN npm install

COPY /opt/jenkins_agent/workspace/test_node_pipeline .

# Expose the port the app runs on
EXPOSE 3000

ENTRYPOINT ["npm"]
# Define the command to run the app
CMD ["start"]
