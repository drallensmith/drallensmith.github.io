Search.setIndex({docnames:["activation","config_file","ctrnn","customization","genome-interface","glossary","index","installation","module_summaries","neat_overview","reproduction-interface","xor_example"],envversion:52,filenames:["activation.rst","config_file.rst","ctrnn.rst","customization.rst","genome-interface.rst","glossary.rst","index.rst","installation.rst","module_summaries.rst","neat_overview.rst","reproduction-interface.rst","xor_example.rst"],objects:{"":{activations:[8,0,0,"-"],aggregations:[8,0,0,"-"],attributes:[8,0,0,"-"],checkpoint:[8,0,0,"-"],config:[8,0,0,"-"],ctrnn:[8,0,0,"-"],distributed:[8,0,0,"-"],genes:[8,0,0,"-"],genome:[8,0,0,"-"],graphs:[8,0,0,"-"],indexer:[8,0,0,"-"],iznn:[8,0,0,"-"],math_util:[8,0,0,"-"],parallel:[8,0,0,"-"],population:[8,0,0,"-"],reporting:[8,0,0,"-"],reproduction:[8,0,0,"-"],six_util:[8,0,0,"-"],species:[8,0,0,"-"],stagnation:[8,0,0,"-"],statistics:[8,0,0,"-"],threaded:[8,0,0,"-"]},"activations.ActivationFunctionSet":{add:[8,2,1,""],get:[8,2,1,""],is_valid:[8,2,1,""]},"aggregations.AggregationFunctionSet":{__getitem__:[8,2,1,""],add:[8,2,1,""],get:[8,2,1,""],is_valid:[8,2,1,""]},"attributes.BaseAttribute":{config_item_name:[8,2,1,""],get_config_params:[8,2,1,""]},"attributes.BoolAttribute":{init_value:[8,2,1,""],mutate_value:[8,2,1,""]},"attributes.FloatAttribute":{clamp:[8,2,1,""],init_value:[8,2,1,""],mutate_value:[8,2,1,""]},"attributes.StringAttribute":{init_value:[8,2,1,""],mutate_value:[8,2,1,""]},"checkpoint.Checkpointer":{restore_checkpoint:[8,5,1,""],save_checkpoint:[8,5,1,""]},"config.Config":{save:[8,2,1,""]},"config.ConfigParameter":{__repr__:[8,2,1,""],format:[8,2,1,""],interpret:[8,2,1,""],parse:[8,2,1,""]},"config.DefaultClassConfig":{save:[8,2,1,""]},"ctrnn.CTRNN":{advance:[8,2,1,""],create:[8,5,1,""],reset:[8,2,1,""]},"distributed.DistributedEvaluator":{evaluate:[8,2,1,""],is_master:[8,2,1,""],start:[8,2,1,""],stop:[8,2,1,""]},"genes.BaseGene":{__lt__:[8,2,1,""],__str__:[8,2,1,""],copy:[8,2,1,""],crossover:[8,2,1,""],get_config_params:[8,7,1,""],init_attributes:[8,2,1,""],mutate:[8,2,1,""],parse_config:[8,7,1,""]},"genes.DefaultConnectionGene":{distance:[8,2,1,""]},"genes.DefaultNodeGene":{distance:[8,2,1,""]},"genome.DefaultGenome":{__str__:[8,2,1,""],add_connection:[8,2,1,""],compute_full_connections:[8,2,1,""],configure_crossover:[8,2,1,""],configure_new:[8,2,1,""],connect_fs_neat_hidden:[8,2,1,""],connect_fs_neat_nohidden:[8,2,1,""],connect_full_direct:[8,2,1,""],connect_full_nodirect:[8,2,1,""],connect_partial_direct:[8,2,1,""],connect_partial_nodirect:[8,2,1,""],create_connection:[8,5,1,""],create_node:[8,5,1,""],distance:[8,2,1,""],mutate:[8,2,1,""],mutate_add_connection:[8,2,1,""],mutate_add_node:[8,2,1,""],mutate_delete_connection:[8,2,1,""],mutate_delete_node:[8,2,1,""],parse_config:[8,7,1,""],size:[8,2,1,""],write_config:[8,7,1,""]},"genome.DefaultGenomeConfig":{add_activation:[8,2,1,""],add_aggregation:[8,2,1,""],check_structural_mutation_surer:[8,2,1,""],get_new_node_key:[8,2,1,""],save:[8,2,1,""]},"indexer.Indexer":{get_next:[8,2,1,""]},"iznn.IZNN":{advance:[8,2,1,""],create:[8,5,1,""],get_time_step_msec:[8,2,1,""],reset:[8,2,1,""],set_inputs:[8,2,1,""]},"iznn.IZNeuron":{advance:[8,2,1,""],reset:[8,2,1,""]},"nn.feed_forward":{FeedForwardNetwork:[8,1,1,""]},"nn.feed_forward.FeedForwardNetwork":{activate:[8,2,1,""],create:[8,5,1,""]},"nn.recurrent":{RecurrentNetwork:[8,1,1,""]},"nn.recurrent.RecurrentNetwork":{activate:[8,2,1,""],create:[8,5,1,""],reset:[8,2,1,""]},"parallel.ParallelEvaluator":{__del__:[8,2,1,""],evaluate:[8,2,1,""]},"population.Population":{run:[8,2,1,""]},"reporting.BaseReporter":{complete_extinction:[8,2,1,""],end_generation:[8,2,1,""],found_solution:[8,2,1,""],info:[8,2,1,""],post_evaluate:[8,2,1,""],post_reproduction:[8,2,1,""],species_stagnant:[8,2,1,""],start_generation:[8,2,1,""]},"reporting.ReporterSet":{add:[8,2,1,""],complete_extinction:[8,2,1,""],end_generation:[8,2,1,""],found_solution:[8,2,1,""],info:[8,2,1,""],post_evaluate:[8,2,1,""],post_reproduction:[8,2,1,""],remove:[8,2,1,""],species_stagnant:[8,2,1,""],start_generation:[8,2,1,""]},"reproduction.DefaultReproduction":{compute_spawn:[8,5,1,""],create_new:[8,2,1,""],parse_config:[8,7,1,""],reproduce:[8,2,1,""],write_config:[8,7,1,""]},"species.DefaultSpeciesSet":{get_species:[8,2,1,""],get_species_id:[8,2,1,""],parse_config:[8,7,1,""],speciate:[8,2,1,""],write_config:[8,7,1,""]},"species.GenomeDistanceCache":{__call__:[8,2,1,""]},"species.Species":{get_fitnesses:[8,2,1,""],update:[8,2,1,""]},"stagnation.DefaultStagnation":{parse_config:[8,7,1,""],update:[8,2,1,""],write_config:[8,7,1,""]},"statistics.StatisticsReporter":{best_genome:[8,2,1,""],best_genomes:[8,2,1,""],best_unique_genomes:[8,2,1,""],get_fitness_mean:[8,2,1,""],get_fitness_median:[8,2,1,""],get_fitness_stat:[8,2,1,""],get_fitness_stdev:[8,2,1,""],get_species_fitness:[8,2,1,""],get_species_sizes:[8,2,1,""],post_evaluate:[8,2,1,""],save:[8,2,1,""],save_genome_fitness:[8,2,1,""],save_species_count:[8,2,1,""],save_species_fitness:[8,2,1,""]},"threaded.ThreadedEvaluator":{__del__:[8,2,1,""],evaluate:[8,2,1,""],start:[8,2,1,""],stop:[8,2,1,""]},activations:{ActivationFunctionSet:[8,1,1,""],InvalidActivationFunction:[8,3,1,""],validate_activation:[8,4,1,""]},aggregations:{AggregationFunctionSet:[8,1,1,""],InvalidAggregationFunction:[8,3,1,""],maxabs_aggregation:[8,4,1,""],mean_aggregation:[8,4,1,""],product_aggregation:[8,4,1,""],validate_aggregation:[8,4,1,""]},attributes:{BaseAttribute:[8,1,1,""],BoolAttribute:[8,1,1,""],FloatAttribute:[8,1,1,""],StringAttribute:[8,1,1,""]},checkpoint:{Checkpointer:[8,1,1,""]},config:{Config:[8,1,1,""],ConfigParameter:[8,1,1,""],DefaultClassConfig:[8,1,1,""],UnknownConfigItemError:[8,3,1,""],write_pretty_params:[8,4,1,""]},ctrnn:{CTRNN:[8,1,1,""],CTRNNNodeEval:[8,1,1,""]},distributed:{DistributedEvaluator:[8,1,1,""],MODE_AUTO:[8,6,1,""],MODE_MASTER:[8,6,1,""],MODE_SLAVE:[8,6,1,""],RoleError:[8,3,1,""],chunked:[8,4,1,""],host_is_local:[8,4,1,""]},genes:{BaseGene:[8,1,1,""],DefaultConnectionGene:[8,1,1,""],DefaultNodeGene:[8,1,1,""]},genome:{DefaultGenome:[8,1,1,""],DefaultGenomeConfig:[8,1,1,""]},graphs:{creates_cycle:[8,4,1,""],feed_forward_layers:[8,4,1,""],required_for_output:[8,4,1,""]},indexer:{Indexer:[8,1,1,""]},iznn:{CHATTERING_PARAMS:[8,6,1,""],FAST_SPIKING_PARAMS:[8,6,1,""],INTRINSICALLY_BURSTING_PARAMS:[8,6,1,""],IZGenome:[8,1,1,""],IZNN:[8,1,1,""],IZNeuron:[8,1,1,""],IZNodeGene:[8,1,1,""],LOW_THRESHOLD_SPIKING_PARAMS:[8,6,1,""],REGULAR_SPIKING_PARAMS:[8,6,1,""],RESONATOR_PARAMS:[8,6,1,""],THALAMO_CORTICAL_PARAMS:[8,6,1,""]},math_util:{mean:[8,4,1,""],median2:[8,4,1,""],median:[8,4,1,""],softmax:[8,4,1,""],stat_functions:[8,6,1,""],stdev:[8,4,1,""],variance:[8,4,1,""]},nn:{feed_forward:[8,0,0,"-"],recurrent:[8,0,0,"-"]},parallel:{ParallelEvaluator:[8,1,1,""]},population:{CompleteExtinctionException:[8,3,1,""],Population:[8,1,1,""]},reporting:{BaseReporter:[8,1,1,""],ReporterSet:[8,1,1,""],StdOutReporter:[8,1,1,""]},reproduction:{DefaultReproduction:[8,1,1,""]},six_util:{iteritems:[8,4,1,""],iterkeys:[8,4,1,""],itervalues:[8,4,1,""]},species:{DefaultSpeciesSet:[8,1,1,""],GenomeDistanceCache:[8,1,1,""],Species:[8,1,1,""]},stagnation:{DefaultStagnation:[8,1,1,""]},statistics:{StatisticsReporter:[8,1,1,""]},threaded:{ThreadedEvaluator:[8,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","exception","Python exception"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"],"6":["py","data","Python data"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:exception","4":"py:function","5":"py:staticmethod","6":"py:data","7":"py:classmethod"},terms:{"abstract":8,"boolean":8,"byte":8,"case":[1,3,8,11],"catch":8,"class":[1,3,5,6,8],"default":[1,2,3,5,8,11],"final":8,"float":[8,11],"function":[1,2,5,6,8,9],"import":[8,11],"int":[5,8],"long":[8,9],"new":[1,4,5,6,8,9,10],"public":[6,8],"return":[1,3,4,8,10,11],"short":[8,9],"static":8,"true":[1,8,11],"try":5,"while":[8,9],Added:8,For:[1,5,6,8,9],Has:8,IDs:8,Not:8,One:[1,9],The:[0,1,2,3,4,5,6,8,9,11],There:[1,8,9],These:5,Ties:8,Use:8,Used:8,Uses:8,Using:5,Was:8,With:8,__call__:8,__config_items__:8,__del__:8,__file__:11,__future__:11,__gene_attributes__:8,__getitem__:8,__init__:[4,10],__lt__:8,__main__:[8,11],__name__:[8,11],__repr__:8,__str__:8,_config_item:8,_type:8,_worker:8,abil:[5,9],abl:3,about:[6,8],abov:[1,8,11],abs:6,absolut:[1,8,11],access:8,accord:8,account:5,accumul:8,achiev:11,across:8,act:1,activ:[1,2,5,6,11],activation_default:[1,11],activation_mutate_r:[1,11],activation_opt:[1,11],activationfunctionset:8,actual:[5,8,11],acycl:5,adapt:8,add:[1,3,8,9,11],add_activ:[3,8],add_aggreg:8,add_connect:8,add_report:[3,11],added:[1,5,8],adding:[1,5,8],addit:[1,6,8,9,11],addr:8,addr_of_master_nod:8,address:8,adjust:8,adjusted_fit:8,admittedli:8,advanc:8,advance_tim:8,advis:8,after:[1,8,10,11],again:1,against:[8,11],aggreg:[1,5,6,11],aggregation_default:[1,11],aggregation_mutate_r:[1,11],aggregation_opt:[1,11],aggregationfunctionset:8,aka:5,algorithm:[1,3,5,8,9],all:[1,3,5,8,10],allen:6,allow:[1,3,8],allowed_connect:8,alon:8,along:[5,8],alreadi:[1,8],also:[1,3,5,7,8],alter:[5,8],altern:[3,8],although:[5,8],alwai:[1,7,8],ama:6,among:[5,8],amount:[1,8],analog:8,ancestor:[5,9],ancestri:[8,9],ani:[1,5,6,7,8],anoth:[1,5,9],apart:8,appear:8,append:8,appli:[4,8],apport:[1,8],appropri:[1,8],approxim:[1,5,8],arbitrari:6,archiv:[7,11],argument:[3,8,10,11],aris:1,arithmet:8,around:8,artifici:9,asexu:[8,9],aspect:[5,8],assertionerror:8,assign:[1,8,10,11],associ:[5,8,11],assum:[5,8],assumpt:8,attempt:[1,7,8],attent:1,attribut:[1,5,6],augment:[5,9],authent:8,authkei:8,automat:8,avail:[1,5,8,11],averag:11,avoid:[1,5,8],awar:8,back:[5,8],bad:8,base:[4,5,8,11],baseattribut:8,basegen:[5,8],basereport:[3,8],basic:[1,6,8],becaus:[7,8],becom:[1,8,9],been:[8,9,10],befor:[1,8],behavior:[0,1,5,6,8],being:[1,3,5,8,9],below:[1,7,8],best:[7,8,11],best_genom:[8,11],best_unique_genom:8,better:[8,9],between:[1,4,5,8,9,11],beyond:9,bia:[1,2,5,8,11],bias:1,bias_init_mean:[1,11],bias_init_stdev:[1,11],bias_init_typ:1,bias_max_valu:[1,11],bias_min_valu:[1,11],bias_mutate_pow:[1,11],bias_mutate_r:[1,11],bias_replace_r:[1,11],biolog:5,bit:1,block:8,bodi:8,boilerpl:[8,11],bool:8,boolattribut:8,borrow:8,both:[5,8],bottom:[8,11],bound:8,branch:6,build:9,built:[1,8],builtin:[1,5,6],cach:8,calcul:[1,8,11],call:[1,3,5,8,10,11],caller:8,can:[0,1,3,4,5,8,9,11],cannot:[5,8],canon:0,capabl:8,care:8,carri:11,caus:[1,8],cautiou:8,center:1,chanc:[1,5,8],chang:[1,5,6,7,8,11],chattering_param:8,check:[5,8],check_structural_mutation_sur:8,checkpoint:[3,6,11],child:4,choic:8,chosen:[1,8],chunk:8,chunksiz:8,circuit:3,circumst:8,clamp:[1,6,8],classic:5,classmethod:8,clear:8,clearer:8,client:8,clone:7,close:9,cls:[4,10],code:[1,5,6,7,8,11],codereclaim:7,coeffici:1,coevolut:8,collect:[3,8],column:8,com:7,combin:[5,8,9],command:7,common:[3,5,9],commonli:8,compar:8,comparison:8,compat:[4,8,11],compatibility_disjoint_coeffici:[1,8,11],compatibility_threshold:[1,8,11],compatibility_weight_coeffici:[1,8,11],compet:5,competit:[8,9],complet:[6,8,11],complete_extinct:8,completeextinctionexcept:[1,8],complex:[4,5,8,9],comput:[1,2,4,5,8,9,11],compute_full_connect:8,compute_spawn:8,concept:[6,9],conceptu:8,config:[1,3,4,6,10,11],config_dict:8,config_fil:11,config_item_base_nam:8,config_item_nam:8,config_pars:8,config_path:11,config_work:[1,6,8],configparamet:8,configpars:[1,8],configur:[3,4,5,6,8,9,10,11],configure_crossov:[4,8],configure_new:[4,8],conflict:8,confus:[5,6],conn_add_prob:[1,8,11],conn_delete_prob:[1,8,11],connect:[1,2,4,5,8,9,11],connect_fs_neat:8,connect_fs_neat_hidden:8,connect_fs_neat_nohidden:8,connect_ful:8,connect_full_direct:8,connect_full_nodirect:8,connect_parti:8,connect_partial_direct:8,connect_partial_nodirect:8,conserv:8,consid:[1,4,8,10],consist:8,constant:[2,8],constructor:[1,3],consum:8,contain:[5,7,8,9],content:[1,5,6,8],continu:[5,6,8],contribut:[1,8],control:8,convent:8,convert:8,cooper:8,copi:[5,8],core:8,correct:8,correspond:[5,8],could:8,count:[1,8],counter:8,coupl:9,cpu:8,cpu_count:8,creat:[1,3,4,5,8,9,10,11],create_connect:8,create_new:[8,10],create_nod:8,creates_cycl:8,creation:[3,8],criteria:8,criterion:[1,5,8,9],critic:8,cross:8,cross_fit:8,crossov:[5,6,8,9],crude:8,csv:8,ctrnn:[2,5,6],ctrnnnodeev:8,cube:6,current:[1,4,5,7,8,9,10,11],current_process:8,custom:[1,5,6,8],cycl:[5,8],cython:8,dag:5,data:[8,11],deal:[8,9],decid:8,decis:8,decreas:[8,11],deem:[8,10],def:[3,11],default_dict:8,defaultclassconfig:8,defaultconnectiongen:[5,8],defaultgenom:[3,4,5,6,8,11],defaultgenomeconfig:[3,8],defaultnodegen:[5,8],defaultreproduct:[3,6,8,11],defaultspeciesset:[3,8,11],defaultstagn:[3,6,8,11],defin:[1,8],definit:[4,10],degre:8,delet:[1,5,8],deliber:8,delimit:8,deliv:[1,5],demonstr:3,depend:[1,2,5,6,8,9],deprec:8,deprecationwarn:8,deriv:9,descend:5,describ:[1,5,8,9,11],descript:[6,8,9,11],design:8,desir:[8,10],detail:[6,8,9],determin:[1,5,8,11],develop:6,deviat:[1,8,11],dict:8,dictionari:[4,8,10],did:8,differ:[0,1,3,5,6,8,9],differenti:[2,5,8],difficulti:9,direct:[5,8],directli:[5,7,8],directori:[7,11],dirnam:11,disabl:[1,5,8],discount:3,discret:5,discuss:5,disjoint:[1,5,8,9],dispatch:8,displai:[8,11],disrupt:9,distanc:[1,4,5,8,9],distinct:9,distinguish:5,distribut:[1,5,6],distributedevalu:8,diverg:9,divid:[1,5,8,9],docstr:8,document:[1,3,8],doe:[5,8,9],doing:8,done:[3,8,9],download:7,draft:6,draw_net:11,drawn:1,drop:[3,8],dt_msec:8,due:[1,8,9],dummi:8,duplic:[8,11],dure:[3,5,8,11],each:[1,5,6,8,9,10,11],earli:9,easier:[1,3],effect:[1,5,8],either:[5,7,8,9,11],element:8,elimin:5,elit:[1,5,8,11],els:3,empti:8,enabl:[1,4,5,8,11],enabled_default:[1,11],enabled_mutate_r:[1,11],enabled_rate_to_false_add:1,enabled_rate_to_true_add:1,encapsul:[3,8],encount:[6,7],end:[4,5,8],end_gener:8,enhanc:8,enough:9,ensur:8,entir:[8,11],entireti:11,enumer:1,envis:8,equal:8,equat:[2,5],equival:[5,8],error:[7,8,11],essenti:1,etc:8,euler:2,eval_funct:8,eval_genom:[8,11],evalu:[1,5,8,10],even:[8,9],event:5,eventu:[5,8],ever:8,everi:8,evolut:[1,2,3,5,8],evolutionari:9,evolv:[3,5,6,8,9,11],exactli:[9,10,11],exampl:[1,3,4,5,6,8],exce:[1,9],except:8,excess:[1,5,8,9],execut:8,exhibit:3,exist:[1,8],exit:8,exit_on_stop:8,exp:6,expand:8,expect:[4,8,10,11],experi:[1,11],experiment:8,explain:9,explicit:[3,8],explicitli:1,explor:8,extens:[6,8],extern:[5,8],extinct:[1,8],extra:[3,8],extract:8,factor:8,fairli:7,fals:[1,8,11],familiar:0,far:8,fast:8,fast_spiking_param:8,feed:[5,8,11],feed_forward:[1,6,11],feed_forward_lay:8,feedforward:[1,5,8,11],feedforwardnetwork:[8,11],fetch:8,figur:11,file:[3,4,6,8,10,11],filenam:8,filter:8,find:[1,3,8],fine:9,finish:8,first:[1,3,8],fit:[1,3,4,5,6,8,9,10],fitness_criterion:[1,8,11],fitness_funct:8,fitness_histori:8,fitness_threshold:[1,8,11],fitter:8,fix:[3,5,8],floatattribut:8,follow:[3,4,5,8,11],forc:1,form:8,format:[1,8,11],former:8,forward:[2,5,8,11],found:[0,1,3,8],found_solut:[1,8],four:8,fraction:1,free:8,frequenc:8,frequent:6,from:[0,1,2,3,4,5,6,8,9,10,11],fs_neat:1,fs_neat_hidden:[1,8],fs_neat_nohidden:[1,8],full:[1,8,11],full_direct:1,full_nodirect:1,fulli:8,func:8,funcattribut:[],fundament:6,further:[3,5,6,8],furthermor:1,futur:[5,8,9],gather:8,gauss:6,gaussian:[1,8],gen:8,gene2:8,gene:[1,4,5,6,9],gene_kei:4,gener:[1,3,4,5,6,8,9,10,11],generation_interv:8,genet:[5,8],genom:[1,5,6,9,10,11],genome0:8,genome1:[4,8],genome2:[4,8],genome_config:[3,8,10],genome_id:[8,11],genome_typ:[3,8,10],genomedistancecach:8,get:[6,7,8,9],get_config_param:8,get_fit:8,get_fitness_mean:8,get_fitness_median:8,get_fitness_stat:8,get_fitness_stdev:8,get_new_node_kei:8,get_next:8,get_speci:8,get_species_fit:8,get_species_id:8,get_species_s:8,get_time_step_msec:8,getattr:8,getfqdn:8,gil:8,gist:9,git:7,github:[1,3,6,7,8,11],give:[5,8,11],given:[1,4,8,10,11],global:8,glossari:6,going:5,good:[8,9],got:11,gotten:8,graph:[5,6],graphviz:6,greater:11,greatest:1,group:[5,8],had:1,handl:[1,8,9],happen:8,harder:5,hardwir:8,has:[1,5,6,8,9,11],hat:6,have:[1,5,8,9,10,11],help:[1,8],here:[3,8,11],hidden:[1,5,8],high:[5,8,9],higher:[1,8,9],highest:[1,4,5,8],his:[6,9],histori:8,homolog:[1,5,8,9],hopefulli:3,host:[5,8],host_is_loc:8,hostnam:8,how:[8,9,11],howev:[1,5,8],http:[7,8],hyperneat:6,idea:9,ideal:8,ident:[5,6],identifi:[4,8,9],ids:8,ieee:8,ignor:[1,8],imag:3,implement:[0,1,3,5,6,8,9,11],impli:[1,8],implicit:[5,8],improv:[1,3,8],includ:[1,3,5,7,8,11],incom:8,incorrect:[6,11],increment:[5,8],index:[5,6],indic:[2,4,9],indirectli:8,individu:[1,5,8,9],individual_id:8,ineffici:8,info:8,inform:[5,6,8,11],inher:8,inherit:8,ini:1,init_attribut:8,init_valu:8,initi:[1,5,6,8,9],initial_connect:[1,8,11],initial_st:8,innov:5,input:[1,2,5,8,11],input_id:8,input_kei:8,insid:8,insofar:1,instal:[6,11],instanc:[1,3,4,8,9,10],instead:[1,7,8],instruct:6,intend:[1,8],intens:9,intent:0,interact:[3,8],interest:[0,8],interfac:[3,5,6,8],intern:8,interpret:8,intrinsically_bursting_param:8,inv:6,invalid:8,invalidactivationfunct:8,invalidaggregationfunct:8,investig:8,invoc:8,involv:5,is_mast:8,is_stagn:8,is_valid:8,issu:[3,6,7,8],item:[4,8,10],iter:[1,8],iteritem:8,iterkei:8,itervalu:8,its:[3,5,8,11],itself:[1,5,8],izgenom:[3,4,5,8],izhikevich:8,izneuron:8,iznn:[3,4,5,6],iznodegen:[5,8],job:[8,9],join:[8,11],just:[3,7,8,9,11],justif:8,keep:[8,9],kei:[4,5,8,11],kenneth:6,know:8,known:[5,8],lack:[1,8],lander:3,languag:1,larg:8,later:[4,5,8,10],latter:8,layer:8,least:[1,5,8,9,11],leav:8,left:8,less:[1,8,9,11],level:[4,8,9,10,11],librari:[1,4,5,6,7,8,10],like:[1,3,4,5,6,8,9,10,11],likelihood:[5,8],limit:[3,5,8],link:8,list:[1,8,11],literatur:3,load:[8,11],local_dir:11,localhost:8,lock:8,log:[6,8],logic:8,longer:[5,8],longest:8,look:8,lookup:8,loop:5,loopback:[1,5],low:8,low_threshold_spiking_param:8,machin:[5,8],magnitud:11,mai:[0,1,3,5,7,8,9],mainli:1,maintain:[8,9],make:[1,3,5,7,8,9,11],manag:8,mani:[5,8],manipul:[8,11],mark:8,master:[5,6,8],match:[3,7,8,9],math_util:6,mathemat:8,matplotlib:6,max:[1,8,9,11],max_stagn:[1,8,11],maxab:[1,8],maxabs_aggreg:8,maxim:8,maximum:[1,8,11],mean:[1,5,8,9,11],mean_aggreg:8,measur:[4,5,8,9,11],mechan:[5,8],median2:8,median:[1,8],meet:[1,8],member:[1,3,4,8,10,11],membran:8,memoiz:8,memori:[3,5,8],mention:[3,8],messag:8,met:8,meth:8,method:[1,2,3,5,6,7,8,11],microsoft:1,middl:8,millisecond:8,min:[1,8],min_species_s:[1,8],minim:[4,10],minimum:[1,3,8],misc:6,miscellan:8,miss:8,mode:8,mode_auto:8,mode_cli:8,mode_mast:8,mode_serv:8,mode_slav:8,modeerror:8,model:[2,8],moder:8,modifi:8,modul:[0,5,6,11],module_summari:3,more:[0,1,3,5,6,8,9,11],most:[1,5,7,8,9,11],mostli:11,move:[1,8],msg:8,much:[1,8,9],multipl:[5,8],multipli:[1,5,8],multiprocess:8,must:[1,3,8,9],mutant:5,mutat:[1,5,6,8,9],mutate_add_connect:8,mutate_add_nod:8,mutate_delete_connect:8,mutate_delete_nod:8,mutate_pow:8,mutate_r:8,mutate_valu:8,my_sinc_funct:3,name:[3,8],nameerror:8,nbest:11,neat:[2,3,5,8],necessari:[1,5,7,8],need:[1,3,5,8,11],neg:[1,8],net:11,network:[1,5,6,8,9,11],neural:[5,6,8,9,11],neuroevolut:[5,9],neuron:[2,5,8,9],newer:7,newli:[1,5],next:[1,5,8,10],no_fitness_termin:[1,8],node:[1,4,5,8,9,11],node_add_prob:[1,8,11],node_delete_prob:[1,8,11],node_dict:8,node_ev:8,node_id:8,node_nam:11,non:[5,8,9],none:[1,8],nor:8,normal:[1,5,8],note:[0,1,5,7,8,11],notifi:8,notimplementederror:8,noutput:11,novemb:8,now:8,null_valu:8,num_genom:[8,10],num_hidden:[1,8,11],num_input:[1,8,11],num_non_stagn:8,num_output:[1,8,11],num_work:8,number:[1,3,4,5,8,9,10,11],number_of_gener:8,numer:8,object:[3,4,5,8,10,11],obtain:7,occur:8,odd:8,offer:8,offici:6,old:8,older:[7,8],onc:[5,6,8,11],one:[1,5,7,8,9,10,11],ones:[1,5,8],onli:[1,3,4,8,9,11],opaqu:[4,8,10],open:[6,7,8],openai:3,oper:[4,8,9],oppon:8,oppos:9,optim:8,option:[5,8,11],order:[1,5,8],ordinari:2,org:8,origin:[5,8,9],other:[1,4,5,6,8,9,11],otherwis:[1,5,8,11],our:8,out:[1,8,11],outlin:[4,7,10],output:[1,5,8,11],output_id:8,output_kei:8,outsid:8,outweigh:8,over:[1,8],overal:8,overfit:8,overlap:8,overli:8,overridden:8,overview:[1,5,6],own:8,packag:[7,8],page:[6,9,11],paid:1,pair:[4,8],paper:9,paragraph:9,parallel:6,parallelevalu:8,param:8,param_dict:[4,8,10],param_list:8,paramet:[1,5,8,11],parent:[4,8],pars:8,parse_config:[4,8,10],parser:[1,8],part:[3,5,8],partial:[1,3,8],partial_direct:1,partial_nodirect:1,particular:[1,5,8],particularli:8,partit:[5,8],pass:[1,3,4,7,8,10],password:8,past:5,path:11,pathnam:8,pdf:8,peopl:8,per:[1,3,8,11],perform:[5,8],perhap:8,period:5,perman:8,permit:8,phenotyp:[5,8],physic:8,pick:8,pickl:8,pin:[5,8],pip:6,place:[0,1,8],placehold:8,plan:[6,8],pleas:[3,6,7],plot:11,plot_speci:11,plot_stat:11,plu:8,point:[3,5,8,9],polish:7,pool:8,poor:5,pop:11,pop_siz:[1,8,10,11],popul:[1,3,5,6,9,10,11],port:8,portabl:8,portion:8,posit:[1,8],possibl:[1,5,8,11],post_evalu:8,post_reproduct:8,potenti:[2,5,8,9],precis:8,prefer:8,present:[1,4,8,10],preserv:[1,8],preset:9,pretti:9,prevent:[1,8],previou:[8,9],previous:8,previous_s:8,print:[8,11],print_funct:11,printabl:8,prior:[3,5,8],privat:8,probabl:[1,3,8,9],problem:[7,8,9,11],problemat:8,proce:[5,9],process:[1,3,5,8],produc:[8,9,11],product:1,product_aggreg:8,program:8,progress:[8,9,11],project:[1,6],promis:9,proper:8,properti:5,proport:1,protect:1,provid:[1,2,3,5,8,9,10,11],pseudogen:5,pseudorandomli:8,pun:8,pure:[6,8],put:8,pylib:[],pypi:[6,11],python2:8,python:[1,2,3,5,8,9,11],qualiti:9,queri:11,queue:8,quick:5,rais:8,random:[1,4,8],randomli:[1,5,8],rang:[1,8,9],rapidli:[6,7],rate:[8,11],rate_to_false_add:8,rate_to_true_add:8,rbf:8,reach:[1,8,9,11],reactiv:5,read:[8,9],readm:6,readthedoc:6,real:9,reason:8,receiv:[1,5,8],recent:[6,7],recogn:8,record:8,recoveri:8,recurr:[1,5,6],recurrentnetwork:8,reddit:6,reduc:[1,8],refer:[3,8,9],referenc:8,regard:[6,8],regardless:[1,10,11],region:0,regist:[1,3],registr:3,regular_spiking_param:8,reiniti:8,rel:[5,8,11],releas:[7,11],relu:6,remov:[1,3,8,10,11],repeat:[5,8],replac:[1,3,8],replace_r:8,report:[1,4,6,10,11],reporterset:[8,10],repositori:7,repr:8,repres:8,represent:8,reproduc:[1,8,10],reproduct:[1,5,6,9],reproduction_typ:[3,8],request:8,requir:[1,3,5,6,8],required_for_output:8,reset:8,reset_on_extinct:[1,8,11],resolv:8,resonator_param:8,respect:5,respond:8,respons:[1,5,8,11],response_init_mean:[1,11],response_init_stdev:[1,11],response_init_typ:1,response_max_valu:[1,11],response_min_valu:[1,11],response_mutate_pow:[1,11],response_mutate_r:[1,11],response_replace_r:[1,11],rest:[4,5,8,10],restart:8,restor:8,restore_checkpoint:[8,11],restrict:8,result:[1,6,7,8],resum:8,retain:8,retriev:8,reward:3,rise:5,role:8,roleerror:8,root:[1,7],roughli:8,run:[1,6,7,8],runtimeerror:8,safeconfigpars:8,same:[1,3,5,8,9],sampl:[],satisfi:[5,8],save:8,save_checkpoint:8,save_genome_fit:8,save_species_count:8,save_species_fit:8,scale:[0,8],scheme:[1,6,8],score:[8,9],scratch:8,script:[8,11],search:6,second:8,section:[6,8,9],see:[1,5,6,8],seen:[4,5,8,11],select:[1,6,8],self:[4,8,10],semi:5,sensit:8,sent:[5,8],separ:[1,5,8],server:8,set:[1,2,3,4,5,8,9],set_input:8,setattr:8,setup:[3,6,9],seven:1,sever:[1,5],sexual:[5,8,9],share:[3,5,8,9],should:[4,5,7,8,9,10,11],show:[8,11],show_species_detail:8,shown:[1,3,7,11],shutdown:8,sid:8,sighted:8,sigmoid:[1,6,11],sign:11,signal:8,significantli:7,silent:1,similar:[1,5,8,9],similarli:1,simpl:[3,8],simplest:11,simpli:[5,7],simul:[1,3,5,8],simultan:1,sin:[3,6],sinc:[3,8,9],singl:[8,9],single_structural_mut:[1,8],situat:8,six:8,six_util:6,size:[4,8,10],slave:[5,8],slave_chunks:8,slave_wait:8,sleep:8,slow:8,small:8,smaller:5,smith:6,smooth:8,socket:8,softmax:8,softplu:6,solut:[8,9],solv:[9,11],some:[0,1,3,5,6,8,9,11],some_password:8,someon:8,someth:3,sometim:5,somewhat:5,sort:8,sourc:[5,6,8],space:[1,8],spare:8,speci:[1,5,6,9,10,11],special:8,speciat:[6,8],species_elit:[1,8,11],species_fit:8,species_fitness_func:[1,8,11],species_set:8,species_set_typ:[3,8],species_stagn:8,speciesset:[8,10],specif:8,specifi:[1,5,8,9,11],spell:8,spike:8,split:[1,8],squar:[1,6],ssh:8,stabil:8,stabl:[6,8],stagnant:[1,8],stagnat:[1,6,10],stagnation_typ:[3,8],standard:[1,6,8,11],stanlei:[6,9],start:[5,8],start_gener:8,stat:11,stat_funct:8,state:[7,8],statement:8,statist:[6,11],statisticsreport:[3,8,11],statu:1,stdev:8,stdout:11,stdoutreport:[3,8,11],step:[5,8,11],still:7,stop:8,str:8,straightforward:8,string:8,stringattribut:8,stringifi:8,structur:[1,8,9,11],structural_mutation_sur:[1,8],subclass:[3,5,8],subdivis:5,submit:3,subprocess:8,subroutin:8,successfulli:11,sudo:7,suggest:8,suitabl:8,sum:[1,8,11],summari:6,superclass:8,suppli:8,support:6,sure:[7,8,11],surviv:5,survival_threshold:[1,8,11],synaps:5,syncmanag:8,synonym:5,sys:8,system:2,tabl:[1,5,8,11],take:[1,4,5,8,10,11],taken:8,tanh:6,task:8,tell:8,term:[5,8,9],termin:[1,5,8,9,11],terminolog:8,test:[7,8],thalamo_cortical_param:8,than:[1,5,6,8,11],thei:[1,5,8,9],them:[5,8,9],themselv:[1,5,8],theori:6,thi:[1,3,4,5,6,8,9,10,11],thing:[5,11],those:[1,5,8,9],thread:6,threadedevalu:8,three:[5,8,11],threshold:[1,8,9],through:[1,5,8,9],throughout:8,thrown:1,thu:[5,8],time:[1,5,6,8],time_const:8,time_interval_second:8,time_step:8,timeout:8,todo:[3,5],togeth:[5,8],too:8,top:[4,8,10,11],topographi:5,topolog:[5,9],total:[1,8],track:[8,9],train:11,transact:8,transform:8,treat:[5,8],tri:1,tune:[5,9],tupl:[5,8],turn:8,two:[1,5,7,8,9,11],type:[1,5,6,8,10],typeerror:8,typo:8,unalt:8,unchang:8,unclear:8,unconnect:1,under:8,underli:8,uniform:[1,8],uniqu:[4,5,8],unknown:8,unknownconfigitemerror:8,unless:[5,8],unlik:5,unlimit:8,unmodifi:8,unspeci:8,unsur:8,until:[8,9,11],unus:8,unusu:8,updat:8,upon:[1,8],usabl:8,usag:8,use:[1,3,7,8,10],used:[1,4,5,8,10],useful:[3,5,8],user:[3,8,9],uses:[1,3,5,8,9],using:[1,2,3,4,5,6,8,10,11],valid:[1,3,8],validate_activ:8,validate_aggreg:8,valu:[1,3,4,8,11],value_typ:8,valueerror:8,vari:[5,6,8],variabl:[1,2,8],varianc:8,variat:[3,9],variou:5,veri:8,version:[0,1,5,6,7,8,11],versu:8,via:[5,6,8],view:11,violat:8,virtual:[5,8],visual:6,vivo:5,vol:8,voltag:8,wai:8,wait:8,want:[8,9,11],weakref:8,websit:[6,9],weight:[1,2,5,8,9,11],weight_init_mean:[1,11],weight_init_stdev:[1,11],weight_init_typ:1,weight_max_valu:[1,11],weight_min_valu:[1,11],weight_mutate_pow:[1,11],weight_mutate_r:[1,11],weight_replace_r:[1,11],well:[5,8],were:[1,8],what:[1,8],whatev:1,when:[1,3,8,9],where:[2,3],whether:[5,8,9],which:[1,3,5,8,9,11],whichev:8,whole:5,whose:[1,3,8],wider:8,win:[8,11],window:1,winner:11,winner_net:11,wipe:8,with_cross_valid:8,within:[1,5,8,9],without:[1,8,11],work:[5,8,11],worker:8,worker_timeout:8,world:[5,8],worsen:8,would:[1,8],wrap:8,wrapper:8,write:[4,8,10],write_config:[4,8,10],write_pretty_param:8,written:8,www:8,xor2:6,xor:[6,8],xor_input:11,xor_output:11,yet:8,ylog:11,you:[0,1,3,5,6,7,8,9,11],your:[1,3,11],zero:[1,3],zip:11},titles:["Overview of builtin activation functions","Configuration file description","Continuous-time recurrent neural network implementation","Customizing Behavior","Genome Interface","Glossary","Welcome to NEAT-Python\u2019s documentation!","Installation","Module summaries","NEAT Overview","Reproduction Interface","Overview of the basic XOR example (xor2.py)"],titleterms:{"class":[4,10],"function":[0,3,11],"new":3,The:7,about:7,abs:0,activ:[0,3,8],aggreg:8,attribut:8,basic:11,behavior:3,builtin:0,checkpoint:8,clamp:0,config:8,configur:1,continu:2,crossov:4,ctrnn:8,cube:0,custom:3,defaultgenom:1,defaultreproduct:1,defaultstagn:1,descript:1,distribut:8,document:6,exampl:[7,11],exp:0,feed_forward:8,file:1,fit:11,from:7,gauss:0,gene:8,genom:[3,4,8],get:11,glossari:5,graph:8,hat:0,ident:0,implement:2,index:8,indic:6,initi:[4,10],instal:7,interfac:[4,10],inv:0,iznn:8,log:[0,3],math_util:8,method:[4,10],misc:4,modul:8,mutat:4,neat:[1,6,7,9,11],network:2,neural:2,other:10,overview:[0,9,11],parallel:8,pip:7,popul:8,pypi:7,python:[6,7],recurr:[2,8],relu:0,report:[3,8],reproduct:[3,4,8,10],result:11,run:11,scheme:3,section:1,setup:7,sigmoid:0,sin:0,six_util:8,softplu:0,sourc:[7,11],speci:[3,8],speciat:[3,4],squar:0,stagnat:[3,8],statist:8,summari:8,tabl:6,tanh:0,thread:8,time:2,todo:[6,8],type:3,using:7,visual:11,welcom:6,xor2:11,xor:11}})